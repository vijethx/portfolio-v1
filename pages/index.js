import Exploring from "../components/Exploring";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex items-center justify-center h-screen">
			<Head>
				<title>Vijeth ☀</title>
				{/* Primary Meta Tags */}
				<title>Vijeth ☀</title>
				<meta
					name="title"
					content="Vijeth ☀"
				/>
				<meta
					name="description"
					content="Vijeth's real estate on the internet to showoff his buidls"
				/>

				{/* Open Graph / Facebook */}
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://vijeth.vercel.app/"
				/>
				<meta
					property="og:title"
					content="Vijeth ☀"
				/>
				<meta
					property="og:description"
					content="Vijeth's real estate on the internet to showoff his buidls"
				/>
				<meta
					property="og:image"
					content="https://vijeth.vercel.app/luffy.jpg"
				/>

				{/* Twitter */}
				<meta
					property="twitter:card"
					content="summary_large_image"
				/>
				<meta
					property="twitter:url"
					content="https://vijeth.vercel.app/"
				/>
				<meta
					property="twitter:title"
					content="Vijeth ☀"
				/>
				<meta
					property="twitter:description"
					content="Vijeth's real estate on the internet to showoff his buidls"
				/>
				<meta
					property="twitter:image"
					content="https://vijeth.vercel.app/luffy.jpg"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>

			<main className="font-[Satoshi]">
				{/* <Image
					src={"/pfp.jpg"}
					alt="pfp"
					className="object-cover rounded-full"
					width={150}
					height={150}
				/> */}
				<div className="flex flex-col gap-2">
					<h1 className="font-bold text-3xl">Vijeth Revankar</h1>
					<h3>You can find me on:</h3>
					<ul>
						<li>
							Twitter:{" "}
							<a
								className="link-hover"
								target="_blank"
								rel="noreferrer"
								href="http://twitter.com/vijethx">
								@vijethx
							</a>
						</li>
						<li>
							GitHub:{" "}
							<a
								className="link-hover"
								target="_blank"
								rel="noreferrer"
								href="http://github.com/vijethx">
								@vijethx
							</a>
						</li>
						<li>
							Peerlist:{" "}
							<a
								className="link-hover"
								target="_blank"
								rel="noreferrer"
								href="http://peerlist.io/vijethx">
								@vijethx
							</a>
						</li>
						<li>
							Warpcast:{" "}
							<a
								className="link-hover"
								target="_blank"
								rel="noreferrer"
								href="http://warpcast.com/vijethx">
								@vijethx
							</a>
						</li>
						<li>
							LinkedIn:{" "}
							<a
								className="link-hover"
								target="_blank"
								rel="noreferrer"
								href="http://linkedin.com/in/vijethx">
								@vijethx
							</a>
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
}
