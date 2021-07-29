interface ICreateWalletDTO {
  description: string;
  value: number;
  owner_id: string;
  type: "income" | "outcome";
}

export { ICreateWalletDTO };
