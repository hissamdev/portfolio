export default function CreateAccount({ toggleModal }: {toggleModal: () => void}) {
    return (
        <>
            <div onClick={toggleModal} className="z-51 px-[21px] fixed inset-0 flex justify-center items-center bg-black/90">
                <form onClick={e => e.stopPropagation()} className="px-[24px] pt-[29px] pb-20 w-full h-fit bg-[#353535] rounded-lg text-white">
                    <h3 className="text-lg ">Enter your email</h3>
                    <p className="pt-1.5 text-sm">Please enter your email to request a free SEO audit of your website.</p>

                    <section className="pt-[21px]">
                        <fieldset className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" type="email" autoComplete="email" required className="px-1.5 h-[30px] border border-white/40 focus:outline-2 rounded-sm" />
                        </fieldset>

                        <fieldset className="pt-[14px] flex flex-col gap-1.5">
                            <label className="text-sm">Website URL</label>
                            <input id="url" type="url" autoComplete="url" required className="px-1.5 h-[30px] border border-white/40 focus:outline-2 rounded-sm" />
                        </fieldset>

                        <fieldset className="pt-[14px] flex flex-col gap-1.5">
                            <label className="text-sm">Send message (optional)</label>
                            <textarea id="message" autoComplete="text" className="px-1.5 h-15 border border-white/40 focus:outline-2 rounded-sm" />
                        </fieldset>

                        <button type="submit" className="mt-[14px] w-full h-[36px] bg-white text-[12px] text-black font-bold rounded-md">Get Free SEO Audit</button>
                    </section>
                </form>
            </div>
        </>
  );
};