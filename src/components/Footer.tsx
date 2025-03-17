import { createClient } from "@/prismicio";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");

    return (
        <footer className="w-full bg-white py-6 px-6 md:px-12 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                
                {/* Left: Logo */}
                <Link href="/" className="flex items-center gap-3">
                    {settings.data.logo.url && (
                        <PrismicNextImage
                            field={settings.data.logo}
                            className="h-auto w-[120px]"
                        />
                    )}
                </Link>

                {/* Center: Copyright */}
                <p className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} {settings.data.site_title}
                </p>

                {/* Right: Navigation */}
                <nav>
                    <ul className="flex items-center gap-6">
                        {settings.data.navigation?.map(({ link, label }) => (
                            <li key={label}>
                                <PrismicNextLink
                                    field={link}
                                    className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                                >
                                    {label}
                                </PrismicNextLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
