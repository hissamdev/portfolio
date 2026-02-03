
type Props = {
    handleSubmit: (e:React.FormEvent<HTMLFormElement>) => Promise<void>,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    url: string,
    setUrl: React.Dispatch<React.SetStateAction<string>>,
    message: string,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    loading: boolean,
}

export default function AuditForm({ handleSubmit, email, setEmail, url, setUrl, message, setMessage, loading }: Props) {

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="text-lg ">Enter your email</h3>
            <p className="pt-1.5 text-sm">Please enter your email to request a free SEO audit of your website.</p>

            <section className="pt-[21px]">
                <fieldset className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" autoComplete="email" required className="px-1.5 h-[30px] border border-white/40 focus:outline-2 rounded-sm" />
                </fieldset>

                <fieldset className="pt-[14px] flex flex-col gap-1.5">
                    <label className="text-sm">Website URL</label>
                    <input value={url} onChange={(e) => setUrl(e.target.value)} id="url" type="url" autoComplete="url" required className="px-1.5 h-[30px] border border-white/40 focus:outline-2 rounded-sm" />
                </fieldset>

                <fieldset className="pt-[14px] flex flex-col gap-1.5">
                    <label className="text-sm">Send message (optional)</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" autoComplete="text" className="px-1.5 h-15 border border-white/40 focus:outline-2 rounded-sm" />
                </fieldset>

                <button type="submit" disabled={loading} className="mt-[14px] w-full h-[36px] bg-white text-[12px] text-black font-bold rounded-md">Get Free SEO Audit</button>
            </section>
        </form>
    )
}