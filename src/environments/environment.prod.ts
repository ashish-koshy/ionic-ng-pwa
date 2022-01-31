export const environment = {
  production: true,
  /** 
   * `ENVIRONMENT_NAME` is a placeholder token that gets 
   * replaced by a value specific to your environment (DEV, QA, PROD etc).
   * Ideally, this should be done by your build pipline.
   * */
  name: '#{ENVIRONMENT_NAME}#'
};
