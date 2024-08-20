import Button from "./Button";
import Container from "./Container";

const Footer = () => {
  return (
    <div
      className="
    bg-primary py-28 px-4 flex flex-col justify-center items-center"
    >
      <Container>
        <h2 className="text-4xl font-semibold text-white text-center">
          Subscribe to get notified about update{" "}
        </h2>
        <p className="text-white leading-8 text-center mx-auto mt-3">
          By subscribing with your mail, you will accept our privacy policy
        </p>
        <div className="flex justify-center
         items-center gap-1">
          <input
            className="px-5 py-3 bg-white/10 text-white "
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <Button isOrange text={"Subscribe us"} />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
