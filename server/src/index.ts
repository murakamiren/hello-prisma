import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	// prisma queryをここに記入

	//prisma create(== sql insert)
	const createUser = await prisma.user.create({
		data: {
			email: "create@gmail.com",
			name: "create",
			age: 25,
			hobby: "creating",
		},
	});
	console.log(createUser);

	// prisma update(== sql update)
	const updateUser = await prisma.user.update({
		where: { id: 1 },
		data: { name: "testUpdate" },
	});
	console.log(updateUser);

	//prisma find(== sql select)
	const getAllUsers = await prisma.user.findMany();
	console.log(getAllUsers);
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
