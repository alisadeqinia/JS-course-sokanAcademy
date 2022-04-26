function addPlan() {
  const planBox = document.getElementById("plan-box");
  const thePlan = document.getElementById("text-input").value;
  const planContainer = document.createElement("div");
  const doneButton = document.createElement("button");
  const delButton = document.createElement("button");
  const textBox = document.createElement("p");
  doneButton.className = "done-btn";
  delButton.className = "del-btn";
  textBox.className = "text-box";
  doneButton.innerHTML = "Done";
  delButton.innerHTML = "Delete";
  textBox.innerHTML = thePlan;
  doneButton.addEventListener("click", jobIsDone);
  delButton.addEventListener("click", deleteJob);
  planContainer.append(textBox, doneButton, delButton);
  planBox.appendChild(planContainer);
}
function delPlan() {
  document.getElementById("plan-box").innerHTML = "";
  alert("All jobs are removed!");
}
function jobIsDone() {
  this.previousSibling.style.textDecoration = "line-through";
  this.previousSibling.style.color = "gray";
}
function deleteJob() {
  this.parentNode.remove();
}

document.getElementById("add-btn").addEventListener("click", addPlan);
document.getElementById("del-btn").addEventListener("click", delPlan);
