import { ConsoleLogger } from '@nestjs/common';

export class CDALogger extends ConsoleLogger {
  private formatMsg = (
    traceId: string,
    functionName: string,
    message: string,
    parameters?: object | null,
    alert = false,
  ): string => {
    let finalMessage = '';
    if (alert) finalMessage += '[ALERT] ';
    if (functionName) finalMessage += `[${functionName}] `;
    if (traceId) finalMessage += `[${traceId}] `;
    if (message) finalMessage += `${message} `;
    if (parameters) finalMessage += `[${JSON.stringify(parameters)}]`;

    return finalMessage;
  };

  cdaDebug(traceId: string, functionName: string, message: string, parameters?: object): void {
    super.debug(this.formatMsg(traceId, functionName, message, parameters));
  }

  cdaWarn(traceId: string, functionName: string, message: string, parameters?: object): void {
    super.warn(this.formatMsg(traceId, functionName, message, parameters));
  }

  cdaError(traceId: string, functionName: string, message: string, parameters?: object): void {
    super.error(this.formatMsg(traceId, functionName, message, parameters));
  }

  cdaAlert(traceId: string, functionName: string, message: string, parameters?: object): void {
    super.error(this.formatMsg(traceId, functionName, message, parameters, true));
  }
}
