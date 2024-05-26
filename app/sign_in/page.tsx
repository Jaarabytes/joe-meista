import Navbar from "@/app/ui/Navbar"
import LoginForm from "@/app/ui/LoginForm"
import Footer from "@/app/ui/Footer"

export default function SignIn() {
    return (
        <>
            <Navbar />
            <div className="my-5">
                <h1 className="my-5 text-3xl text-green-900">Hello, this is the sign in page!</h1>
                <LoginForm />
            </div>
            <Footer />
        </>
    )
}