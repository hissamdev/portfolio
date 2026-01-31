import { useState } from "react";

export default function AuditForm() {
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true);

        try {
            await fetch('api/auth/request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                url,
                message,
            })
        })

        } catch (err) {
            console.error(err);
        }
        
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} onClick={e => e.stopPropagation()} className="px-[24px] pt-[29px] pb-20 w-full h-fit bg-[#353535] rounded-lg text-white">
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