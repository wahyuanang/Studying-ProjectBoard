class Tooltip {}

class ProjectItem {
  constructor(id, updateProjectListsFunction) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton();
  }

  connectMoreInfoButton() {}

  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchButton = projectItemElement.querySelector(
      "button:last-of-type"
    );
    switchButton.addEventListener("click", this.updateProjectListsFunction);
  }
}

class ProjectList {
  Projects = [];

  constructor(type, switchHandlerFunction) {
    this.type = type;
    this.switchHandlerFunction = switchHandlerFunction;

    // EXAMPLE: #active-projects li
    const ProjectItems = document.querySelectorAll(`#${type}-projects li`);
    // for (let i = 0; i < ProjectItems.length; i++)

    for (const ProjectItem of ProjectItems) {
      console.log(type);
      console.log(ProjectItem);
      this.Projects.push(new ProjectItem(ProjectItem.id, this.switchProject));
    }
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject() {}

  switchProject(projectId) {
    this.addProject();
    this.switchHandlerFunction((i) => i.id === projectId);
    console.log(Projects);
    this.switchHandlerFunction(
      this.Projects.findIndex((i) => i.id === projectId)
    );
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
    activeProjectList = setSwitchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
  }
}

App.init();
