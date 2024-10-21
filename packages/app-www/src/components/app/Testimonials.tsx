import type { VariantProps } from "tailwind-variants";

import { Slideshow, SlideshowNextButton, SlideshowPreviousButton, SlideshowSlide } from "~/components/headless";
import { tv } from "~/helpers";

import ArrowNarrowLeftIcon from "#/images/icons/arrow-narrow-left.svg";
import ArrowNarrowRightIcon from "#/images/icons/arrow-narrow-right.svg";

const variants = tv({
  slots: {
    slideshowClassName:
      "flex flex-wrap items-center justify-between gap-x-16 gap-y-8 px-[5dvw] py-24 md:flex-nowrap 2xl:px-[10dvw]",
    slideshowNextButtonClassName:
      "rounded-full border p-4 outline-none focus-visible:outline-4 focus-visible:outline-offset-4",
    slideshowNextButtonIconClassName: "size-6",
    slideshowPreviousButtonClassName:
      "rounded-full border p-4 outline-none focus-visible:outline-4 focus-visible:outline-offset-4 md:order-first",
    slideshowPreviousButtonIconClassName: "size-6",
    slideshowSlideClassName: "flex flex-col gap-8",
    slideshowSlideRoleClassName: "",
  },
  variants: {
    _color: {
      "blue-950": {
        slideshowClassName: "bg-blue-950",
        slideshowNextButtonClassName: "border-white hover:bg-black focus-visible:outline-white",
        slideshowNextButtonIconClassName: "stroke-white",
        slideshowPreviousButtonClassName: "border-white hover:bg-black focus-visible:outline-white",
        slideshowPreviousButtonIconClassName: "stroke-white",
        slideshowSlideClassName: "font-normal text-white",
        slideshowSlideRoleClassName: "text-sand-400",
      },
    },
  },
});

type Variants = VariantProps<typeof variants>;

type TestimonialsProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Testimonials = ({ _color }: TestimonialsProps) => {
  const {
    slideshowClassName,
    slideshowNextButtonClassName,
    slideshowNextButtonIconClassName,
    slideshowPreviousButtonClassName,
    slideshowPreviousButtonIconClassName,
    slideshowSlideClassName,
    slideshowSlideRoleClassName,
  } = variants({ _color });

  const testimonials = [
    {
      testimony: "INOLIB nous a permis d’atteindre les standards d’accessibilité et ainsi améliorer notre SEO.",
      name: "Sienna Hewitt",
      role: "Project Manager, Layers",
    },
    {
      testimony: "Un service exceptionnel qui a transformé notre approche de l’accessibilité.",
      name: "John Doe",
      role: "CEO, Company",
    },
    {
      testimony:
        "Grâce à INOLIB, notre site est désormais accessible à tous et notre SEO s’est considérablement amélioré.",
      name: "Jane Smith",
      role: "Marketing Director, Brand",
    },
  ];

  return (
    <Slideshow aria-roledescription="diaporama" className={slideshowClassName()}>
      <div>
        {testimonials.map((item, index) => (
          <SlideshowSlide aria-roledescription="diapositive" className={slideshowSlideClassName()} key={index}>
            <p className="text-3xl sm:h-[11.25rem] sm:text-4xl lg:text-5xl">{item.testimony}</p>

            <div>
              <p className="text-2xl">{item.name}</p>
              <p className={slideshowSlideRoleClassName()}>{item.role}</p>
            </div>
          </SlideshowSlide>
        ))}
      </div>

      {testimonials.length > 1 ? (
        <SlideshowPreviousButton className={slideshowPreviousButtonClassName()} title="Témoignage précédent">
          <ArrowNarrowLeftIcon aria-label="Témoignage précédent" className={slideshowPreviousButtonIconClassName()} />
        </SlideshowPreviousButton>
      ) : (
        <div className="border border-transparent p-7 md:order-first" />
      )}

      {testimonials.length > 1 ? (
        <SlideshowNextButton className={slideshowNextButtonClassName()} title="Témoignage suivant">
          <ArrowNarrowRightIcon aria-label="Témoignage suivant" className={slideshowNextButtonIconClassName()} />
        </SlideshowNextButton>
      ) : (
        <div className="border border-transparent p-7" />
      )}
    </Slideshow>
  );
};
