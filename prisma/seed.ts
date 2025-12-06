import "dotenv/config"; // <-- add this first
import { db } from "~/server/db";

async function main() {
  // await testConnection();
  // const users = await db.user.create({
  //   data: {
  //     id: "ABC123",
  //     fullname: "Smith Doe",
  //     firstname: "Smith",
  //     lastname: "Doe",
  //     role: "USER",
  //     email: "smithdoe1706@gmail.com",
  //     updatedAt: new Date(),
  //   },
  // });

  const res = await db.businessPlan.create({
    data: {
      name: "Bernard",
      status: "DRAFT",
      progress: 0,
      userId: "7pVNR75jeBFJP1Ggw0Xq0cc5lxiy2Vxt",
    },
  });

  // console.log(users);
  console.log(res);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
