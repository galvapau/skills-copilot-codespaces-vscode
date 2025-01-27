function skillsMember() {
  return {
    name: "John",
    skills: ["React", "NodeJS"],
    showSkills: function () {
      this.skills.forEach(function (skill) {
        console.log(`${this.name} knows ${skill}`);
      });
    },
  };
}