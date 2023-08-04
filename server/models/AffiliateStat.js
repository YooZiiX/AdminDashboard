import mongoose from "mongoose";

const AffiliateStatSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    affiliateStat: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);

const AffiliateStat = new mongoose.model("AffiliateStat", AffiliateStatSchema);
export default AffiliateStat;
