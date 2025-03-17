import { createClient } from "@/prismicio";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="w-full px-6 md:px-12 py-4 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {settings.data.logo.url && (
            <PrismicNextImage
              field={settings.data.logo}
              className="h-auto w-[120px]"
            />
          )}
        </Link>

        {/* Navigation */}
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
    </header>
  );
}
