import { useCallback, useRef, useState } from "react"

export default function CodeInput({ length = 6 }) {
    const [code, setCode] = useState<string[]>(Array(length).fill(''))
    const inputsRef = useRef<(HTMLInputElement | null)[]>([])

    const focusNextEmpty = useCallback((index: number) => {
        for (let i = index + 1; i < length; i++) {
            if (!code[i]) {
                inputsRef.current[i]?.focus()
                return
            }
        }

        for (let i = 0; i < length ; i++) {
            if (!code[i]) {
                inputsRef.current[i]?.focus()
                return
            }
        }
    }, [code, length])

    const handleChange = useCallback((value: string, index: number) => {
        if (!/^\d?$/.test(value)) return

        const newCode = [...code]
        newCode[index] = value
        setCode(newCode)

        if (value) {
            focusNextEmpty(index)
        }
    }, [code, focusNextEmpty])

    function handleKeyDown(e: React.KeyboardEvent, index: number) {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputsRef.current[index - 1]?.focus()
        }

        if (e.key === 'ArrowLeft' && index > 0) {
            e.preventDefault()
            inputsRef.current[index - 1]?.focus()
        }

        if (e.key === 'ArrowRight' && index < length - 1) {
            e.preventDefault()
            inputsRef.current[index + 1]?.focus()
        }
    }

    return (
        <>
            <div className="pt-7">
                <div>
                    <h3 className="text-lg">Enter code</h3>
                    <p className="text-sm">A code has been sent to your inbox if the email exists.</p>
                </div>

                <div className="pt-4 flex gap-3">
                    {code.map((digit, index) => (
                        <input key={index} ref={el => {inputsRef.current[index] = el}}
                            inputMode="numeric" maxLength={1} value={digit}
                            onChange={e => handleChange(e.target.value, index)}
                            onKeyDown={e => handleKeyDown(e, index)}
                            className="w-8 h-10 bg-gray-400 rounded-sm text-center"
                        />
                    ))}
                </div>
            </div>
        </>
    )
}