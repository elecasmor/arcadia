import { Button } from 'primereact/button'

export function Header() {
    return (
        <header className="text-center py-12">
            <h1 className="text-2xl font-bold text-shadow-md">Arcadia</h1>
            <div className="flex items-center justify-center gap-xs">
                <div className="text-shadow-md">{`>.`} Registro de ocio de</div>
                <Button
                    label="@AsukA05"
                    link
                    onClick={() =>
                        window.open(
                            'https://bsky.app/profile/asuka05.bsky.social',
                            '_blank'
                        )
                    }
                    className="underline underline-offset-4"
                    style={{
                        padding: 0,
                    }}
                />
                <div>
                    <svg
                        fill="none"
                        viewBox="0 0 64 57"
                        width="20"
                        style="width: 20px; height: 16.7188px;"
                    >
                        <path
                            fill="var(--color-primary)"
                            d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805ZM50.127 3.805C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745Z"
                        />
                    </svg>
                </div>
            </div>
        </header>
    )
}
