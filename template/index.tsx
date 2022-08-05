import Metas from "layout";
import Header from "components/Header";
import Footer from "components/Footer";
import { IChildren } from "core/types";

export const Template = ({ children }: IChildren) => {
  return (
    <>
      <Metas />
      <Header />
      <main className="flex w-full justify-center bg-quaternary h-[128]">
        <section className="flex w-full flex-col items-center py-5">
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
};
