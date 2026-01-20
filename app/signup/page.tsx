// import SignUpForm from "@/components/signup-form"

// export default function LoginPage() {
//   return (
//     <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
//       <div className="w-full max-w-sm md:max-w-l">
//         <SignUpForm/>
//       </div>
//     </div>
//   )
// }








import Image from 'next/image';

import SignUpForm from "@/components/signup-form"

export default function SigninPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium text-2xl">
            <div className="bg-transparent text-primary-foreground flex size-8 items-center justify-center rounded-md">
              <Image
                                  src="/Logo_quliqai.png"
                                  alt="QualiQ AI Logo"
                                  width={50}
                                  height={50}
                                  className="object-contain"
                                />
                          </div>
                          QualiQ AI
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <SignUpForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/loginandsignup.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.5]"
        />
      </div>
    </div>
  )
}
