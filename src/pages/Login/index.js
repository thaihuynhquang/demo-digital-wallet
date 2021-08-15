import RoninLogo from 'ronin_wallet.webp';
import './login.css';

export default function Login() {
  return (
    <div className="container mx-auto">
      <div className="ronin-background relative bg-local bg-cover">
        <img
          className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-44 w-32"
          alt="ronin-logo"
          src={RoninLogo}
        />
      </div>
      <div className="flex flex-col justify-center items-center my-7">
        <h1 className="mb-2 text-4xl font-bold leading-10">Ronin Wallet</h1>
        <h4 className="font-normal text-base leading-6">
          Your Digital Passport
        </h4>
      </div>
    </div>
  );
}
