import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-24">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            {t("brand")}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {t("description")}
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                            {t("product.title")}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    {t("product.features")}
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="#pricing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    Pricing
                                </Link>
                            </li> */}
                            <li>
                                <Link href="#testimonials" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    {t("product.testimonials")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                            {t("company.title")}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    {t("company.about")}
                                </Link>
                            </li>
                            <li>
                                <Link href="#blog" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    {t("company.blog")}
                                </Link>
                            </li>
                            <li>
                                <Link href="#team" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    {t("company.team")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                            {t("legal.title")}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    {t("legal.privacy")}
                                </Link>
                            </li>
                            <li>
                                <Link href="#terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    {t("legal.terms")}
                                </Link>
                            </li>
                            <li>
                                <Link href="#cookies" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    {t("legal.cookies")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        {t("copyright", { year: new Date().getFullYear() })}
                    </p>
                </div>
            </div>
        </footer>
    );
};
