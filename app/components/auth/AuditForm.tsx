import { requestAudit } from "@/app/actions/auth"

export default function AuditForm({ loading, setEmail }: { loading: boolean, setEmail: React.Dispatch<React.SetStateAction<string>> }) {

    return (
        <form action={requestAudit}>
            <h3 className="text-lg ">Enter your email</h3>
            <p className="pt-1.5 text-sm">Please enter your email to request a free SEO audit of your website.</p>

            <section className="pt-[21px]">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" name="email" type="email" placeholder="Email" autoComplete="email" onChange={(e) => setEmail(e.target.value)} required className="px-1.5 h-[30px] border border-white/40 focus:outline-2 rounded-sm" />
                </div>

                <div className="pt-[14px] flex flex-col gap-1.5">
                    <label className="text-sm">Website URL</label>
                    <input id="url" name="url" type="url" placeholder="Website URL" autoComplete="url" required className="px-1.5 h-[30px] border border-white/40 focus:outline-2 rounded-sm" />
                </div>

                <div className="pt-[14px] flex flex-col gap-1.5">
                    <label className="text-sm">Send message (optional)</label>
                    <textarea name="message" placeholder="(Optional) Enter a message" autoComplete="text" className="px-1.5 h-15 border border-white/40 focus:outline-2 rounded-sm" />
                </div>

                <button type="submit" disabled={loading} className="mt-[14px] w-full h-[36px] bg-white text-[12px] text-black font-bold rounded-md">Get Free SEO Audit</button>
            </section>
        </form>
    )
}