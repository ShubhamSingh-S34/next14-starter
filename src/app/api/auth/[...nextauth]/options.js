import { connectToDb } from "@/lib/connectToDB";
import { User } from "@/lib/models";
import GithubProvider from "next-auth/providers/github"

export const options = {

    providers: [
        GithubProvider({
            profile(profile) {
                console.log("This is user profile ", profile);
                return {
                    ...profile,
                    userRole: "GitHub user"
                }
            },
            clientId: "8f8565b6e0be3a8dc34b",
            clientSecret: "6142d99178fa7bab84592409b798d42071e69fc6"
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            console.log("Inside jwt");
            if (user) token.role = user.role;
            return token;
        },
        async session({ session, token }) {
            console.log("Inside session");
            if (session?.user) session.user.role = token.role
            return session;
        },
        async signIn({ user, account, profile }) {
            console.log("Inside signIN");
            console.log(user, account, profile);
            if (account.provider === 'github') {
                await connectToDb();
                try {
                    const user = await User.findOne({ email: profile.email });
                    if (!user) {
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            img: profile.avatar_url,
                        })
                        await newUser.save();
                    }
                    return true;
                } catch (error) {
                    console.log("Errro finding user !!!!", error);
                    return false;
                }
            }
            return true;
        },

    }
}
























