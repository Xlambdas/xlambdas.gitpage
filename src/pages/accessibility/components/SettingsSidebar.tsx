// src/pages/accessibility/components/SettingsSidebar.tsx

interface Props {
    panel: string
    setPanel: (panel: any) => void
}

export const SettingsSidebar_old: React.FC<Props> = ({ panel, setPanel }) => {

    const items = [
        { id: "colors", label: "Colors" },
        { id: "typography", label: "Typography" },
        { id: "sizes", label: "Sizes" },
        { id: "motion", label: "Motion" }
    ]

    return (

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px"
            }}
        >

            {items.map(item => (
                <button
                    key={item.id}
                    onClick={() => setPanel(item.id)}
                    style={{
                        padding: "12px",
                        textAlign: "left",
                        borderRadius: "6px",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: panel === item.id ? 600 : 300,
                        background: panel === item.id ? "rgba(0,0,0,0.05)" : "transparent"
                    }}
                >
                    {item.label}
                </button>
            ))}

        </div>

    )
}


export const SettingsSidebar: React.FC<Props> = ({ panel, setPanel }) => {

    const items = [
        { id: "colors", label: "Colors" },
        { id: "typography", label: "Typography" },
        { id: "sizes", label: "Sizes" },
        { id: "motion", label: "Motion" }
    ]

    return (

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px"
            }}
        >

            {items.map(item => {

                const active = panel === item.id

                return (

                    <button
                        key={item.id}
                        onClick={() => setPanel(item.id)}
                        style={{
                            padding: "12px 14px",
                            textAlign: "left",
                            borderRadius: "8px",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "0.95rem",
                            fontWeight: active ? 500 : 400,
                            color: active ? "white" : "inherit",
                            background: active
                                ? "var(--color-purple)"
                                : "transparent",
                            transition: "all 0.2s ease"
                        }}
                    >
                        {item.label}
                    </button>

                )

            })}

        </div>

    )
}