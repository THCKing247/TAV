import type { Testimonial } from "@/data/testimonials";

type TestimonialsSectionProps = {
  items: Testimonial[];
};

export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  return (
    <ul className="grid gap-6 lg:grid-cols-3">
      {items.map((t) => (
        <li key={t.id}>
          <figure className="h-full rounded-2xl border border-stone-200/90 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md">
            <blockquote className="text-base leading-relaxed text-stone-700">
              <span className="text-stone-400" aria-hidden>
                “
              </span>
              {t.quote}
              <span className="text-stone-400" aria-hidden>
                ”
              </span>
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold text-stone-900">
              {t.attribution}
              <span className="mt-1 block text-xs font-normal text-stone-500">{t.context}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
