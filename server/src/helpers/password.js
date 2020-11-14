import * as bcryptjs from 'bcryptjs';

export const encrypt = async (pwd) => {
const password = await bcryptjs.hash(pwd, 10);
  return password;
};

export const compare = async (pwd, inPwd) =>  {
  const valid = await bcryptjs.compare(pwd, inPwd);
  return valid;
}
