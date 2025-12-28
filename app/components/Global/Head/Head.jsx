import "aos/dist/aos.css";
import Container from "../container/Container";

export default function Head({ id, children }) {
  return (
    <div
      data-aos="zoom-in"
      id={id}
      className="flex scroll-mt-[var(--nav-height)] items-center justify-between p-4"
    >
      <Container>
        <div 
          className="group relative cursor-pointer rounded border border-solid border-[var(--primary)] px-4 py-0 after:absolute after:top-1/2 after:left-1/2 after:h-0 after:w-0 after:rounded-full after:bg-[var(--primary)] after:transition-all after:duration-300 after:content-[''] hover:after:top-0 hover:after:left-0 hover:after:h-full hover:after:w-full hover:after:rounded head"
        >
          <h1
            className="relative z-10 text-[var(--black)] transition-all duration-300 group-hover:text-[var(--white)] header"
          >
            {children}
          </h1>
        </div>
      </Container>
    </div>
  );
}
