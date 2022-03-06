const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

/**
 * @?? = bernilai null jika, value adalah null / undefined
 * @|| = bernilai null jika, value adalah null, NaN, '', undefined, false, 0;
 */

console.log(fetchedUserData?.job?.title ?? null);
console.log(fetchedUserData?.job?.title || null);
