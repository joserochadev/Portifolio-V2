// Função para criar um elemento de projeto
function createProjectElement(project) {
	const projectItem = document.createElement('div')
	projectItem.classList.add('project-item')

	const img = document.createElement('img')
	img.src = project.bannerURL
	img.alt = 'Imagem'
	projectItem.appendChild(img)

	const overlay = document.createElement('div')
	overlay.classList.add('overlay')

	const paragraph = document.createElement('p')
	paragraph.innerHTML = `<h3 class="title">${project.name}</h3> <p class="desc">${
		project.description
	}</p>Tags: ${project.tags.join(', ')}`
	overlay.appendChild(paragraph)

	if (project.repositorieURL) {
		const repoButton = document.createElement('a')
		repoButton.href = project.repositorieURL
		repoButton.target = '_blank'
		repoButton.innerHTML = `Repositório`
		overlay.appendChild(repoButton)
	}

	if (project.deployURL) {
		const deployButton = document.createElement('a')
		deployButton.href = project.deployURL
		deployButton.target = '_blank'
		deployButton.textContent = 'Deploy'
		overlay.appendChild(deployButton)
	}

	projectItem.appendChild(overlay)

	return projectItem
}
