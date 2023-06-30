"use client";

import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import { useTransition } from "react";
import Image from "next/image";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(lang: string) {
    startTransition(() => {
      router.replace(`/${lang}${pathname}`);
    });
  }
  return (
    <div>
      {locale == "en" && (
        <Image
          className="ml-[20px] cursor-pointer"
          src="./es.svg"
          width={27}
          height={18}
          alt="Spanish"
          onClick={() => onSelectChange('es')}
        />
      )}

      {locale == "es" && (
        <Image
          className="ml-[20px] cursor-pointer"
          src="./en.svg"
          width={27}
          height={18}
          alt="Spanish"
          onClick={() => onSelectChange('en')}
        />
      )}
    </div>
  );
}
