const fs = require("fs");
let deposit = JSON.parse(fs.readFileSync("./database/deposit.json"));

exports.addInvDeposit = (sender) => {
  const obj = {
    id: sender,
    saldo: 0,
  };
  deposit.push(obj);
  fs.writeFileSync(
    "./database/deposit.json",
    JSON.stringify(deposit, null, 2),
  );
};
exports.checkInvDeposit = (sender) => {
  let status = false;
  Object.keys(deposit).forEach((i) => {
    if (deposit[i].id === sender) {
      status = true;
    }
  });
  return status;
};

exports._addSaldo = (sender, amount) => {
  let position = false;
  Object.keys(deposit).forEach((i) => {
    if (deposit[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    deposit[position].saldo += amount;
    fs.writeFileSync(
      "./database/deposit.json",
      JSON.stringify(deposit, null, 2),
    );
  }
  return;
};
exports.kurangSaldo = (sender, amount) => {
  let position = false;
  Object.keys(deposit).forEach((i) => {
    if (deposit[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    deposit[position].saldo -= amount;
    fs.writeFileSync(
      "./database/deposit.json",
      JSON.stringify(deposit, null, 2),
    );
  }
  return;
};
exports.getSaldo = (sender) => {
  let position = false;
  Object.keys(deposit).forEach((i) => {
    if (deposit[i].id === sender) {
      position = i;
    }
  });
  if (position !== false) {
    return deposit[position].saldo;
  }
};
//
