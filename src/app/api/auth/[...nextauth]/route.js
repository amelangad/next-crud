import NextAuth, {NextAuthOptions} from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import User from '../../../models/user'
import connectMongoDB from "../../../lib/connect";
import * as bcrypt from 'bcrypt'


const authOptions = {
    providers: [
      GithubProvider ({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      GoogleProvider ({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLESECRET,
      }),
      CredentialsProvider({
        name: "Login",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "login" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          await connectMongoDB();
          try {
    const user = await User.findOne({email: credentials.username});
    if (user) {
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
    if (isPasswordCorrect) 
    return user;
          }}
  catch(err) {
    throw new Error(err);
  }
      }
    }),
    ],
    callbacks:{
      async jwt({ token, user}){
          return { ...token, ...user};
        },

      async session ({session, token}){
        session.user = token
        return session;
      }
    },
  };



const handler = NextAuth(authOptions);


export { handler as GET, handler as POST }