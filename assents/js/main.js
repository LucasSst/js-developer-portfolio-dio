
function updateProfile(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerHTML = profileData.name


    const job = document.getElementById('profile.job')
    job.innerHTML = profileData.job



    const location = document.getElementById('profile.location')
    location.innerHTML = profileData.location


    const phone = document.getElementById('profile.phone')
    phone.href = `tel: ${profileData.phone}`
    phone.innerHTML = profileData.phone


    const email = document.getElementById('profile.email')
    email.href = `mailto:${profileData.email}`
    email.innerHTML = profileData.email
    
    
   
    
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map((skills) => `<li> ${skills} </li>`).join('')
    

}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map((hardSkills) => `<li> <img width='50px' src='${hardSkills.logo}' alt='${hardSkills.name}' title='${hardSkills.name}'></li>`).join('')
    
}

function updateLanguages(profileData){
    const languages = document.getElementById('profile-languages')
    languages.innerHTML = profileData.languages.map((languages) => `<li>${languages}</li>`).join('')
}

function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile-portfolio')
    portfolio.innerHTML = profileData.portfolio.map((portfolio) => {
    return `
    <li>
        <h3 ${portfolio.github ? 'class="title github"' : 'class:"title"' }>${portfolio.name}</h3>
        <a href="${portfolio.url}" target="_blank">${portfolio.url}</a>
    </li>
    
    `}).join('')
}

function updateProfessionalExperience(profileData){
    const professionalExperience = document.getElementById('profile.professionalExperience')

    professionalExperience.innerHTML = profileData.professionalExperience.map((professional) => {
        return`
            <li>
                <h3 class="title calendario">${professional.name}</h3>
                <p class='period'>${professional.period}</p>
                <p>${professional.description}</p>
            </li>
        `

    }).join('')

    
}
(
    async () => {
        const profileData = await fetchProfileData()
        updateProfile( profileData)
        updateSoftSkills( profileData)
        updateHardSkills(profileData)
        updateLanguages(profileData)
        updatePortfolio(profileData)
        updateProfessionalExperience(profileData)

    }
)() 