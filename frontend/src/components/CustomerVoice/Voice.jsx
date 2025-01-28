import './Voice.css'

export default function Voice() {
    const { ref: ref4, inView: inView4 } = useInView({
        rootMargin: '-300px',
        triggerOnce: true,
    });

    const { ref: ref5, inView: inView5 } = useInView({
        rootMargin: '-300px',
        triggerOnce: true,
    });

    const { ref: ref6, inView: inView6 } = useInView({
        rootMargin: '-300px',
        triggerOnce: true,
    });
    return (
        <>
            {/* customer voice */}
            <h2 className="header">Customer&apos;s Voice</h2>
            <div ref={ref4} className="voiceConteiner fadeIn">
                {inView4 && (
                    <>
                        <div className="voiceName">
                            <h3 className="header3">Name 1</h3>
                        </div>
                        <p>Explanation</p>
                    </>
                )}
            </div>

            <div ref={ref5} className="voiceConteiner fadeIn">
                {inView5 && (
                    <>
                        <div className="voiceName">
                            <h3 className="header3">Name 2</h3>
                        </div>
                        <p>Explanation</p>
                    </>
                )}
            </div>

            <div ref={ref6} className="voiceConteiner fadeIn">
                {inView6 && (
                    <>
                        <div className="voiceName">
                            <h3 className="header3">Name 3</h3>
                        </div>
                        <p>Explanation</p>
                    </>
                )}
            </div>
        </>
    );
}