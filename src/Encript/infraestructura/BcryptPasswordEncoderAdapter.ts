import * as bcrypt from 'bcrypt';

class BcryptPasswordEncoderAdapter extends PasswordEncoderPort {
    async hashPassword(password:string) {
      const saltRounds = 10;
      return bcrypt.hash(password, saltRounds);
    }
  
    async comparePassword(plainPassword:string, hashedPassword:string) {
      return bcrypt.compare(plainPassword, hashedPassword);
    }
  }