export const prefix = '/api/experience';

export const experienceApiRoutes = Object.freeze({
  prefix,
  identification: `${prefix}/identification`,
  submit: `${prefix}/submit`,
  verification: `${prefix}/verification`,
  profile: `${prefix}/profile`,
  mfa: `${prefix}/profile/mfa`,
});

export const verificationCodeRequestTimeoutMs = 60_000;

export type VerificationResponse = {
  verificationId: string;
};
