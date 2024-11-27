import Button from "@/components/Button";
import designEx1 from "@/assets/images/design-example-1.png";
import designEx2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image src={designEx1} alt="designEx1" />
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image src={designEx2} alt="designEx1" />
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Andrea" />
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Bryan" color="red" />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold cursor-pointer">
                        {" "}
                        ✨ $7.5 seed round raised
                    </div>
                </div>

                <h1 className="text-6xl font-medium lg:text-8xl text-center mt-6 md:text-7xl">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 mx-auto max-w-2xl">
                    Design tools shouldn&rsquo;t slow you down, Layers combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow
                </p>
                <form className="flex border border-white/15 mx-auto max-w-lg rounded-full p-2 mt-8">
                    <input
                        className="bg-transparent px-4 md:flex-1 "
                        type="email"
                        placeholder="Enter your email"
                    />
                    <Button
                        variant="primary"
                        className="whitespace-nowrap"
                        type="submit"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default Hero;
