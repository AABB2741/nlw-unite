import { prisma } from "../src/lib/prisma";

async function seed() {
	await prisma.event.create({
		data: {
			id: "6562f747-6431-402b-8c5f-b0ac3e12f6dc",
			title: "Unite Summit",
			slug: "unite-summit",
			details: "Um evento para devs apaixonado(a)s por código",
			maximumAttendees: 120,
		},
	});
}

seed().then(() => {
	console.log("Database seeded");
	prisma.$disconnect();
});
