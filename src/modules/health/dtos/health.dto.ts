export class HealthStatusResponseDto {
  readonly status!: string;
  readonly deployedTime!: string;
  readonly serverTime!: string;
  readonly envVars!: object;
}
