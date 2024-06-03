export function formatMessagesContent(message: string, urlMisCompras: string, urlHelpForm: string) {
  let auxiliarMessage = message.replace(/<URL_MIS_COMPRAS>/g, urlMisCompras);
  auxiliarMessage = auxiliarMessage.replace(/<URL_HELP_FORM>/g, urlHelpForm);
  return auxiliarMessage;
}
