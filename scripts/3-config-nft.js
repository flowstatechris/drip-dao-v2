import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x1adB74299C859c1c7C18f2adC5ADD58eC905830f", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "DripDAO Membership Card",
        description: "This card certifies your membership in DripDAO",
        image: readFileSync("scripts/assets/project1.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();