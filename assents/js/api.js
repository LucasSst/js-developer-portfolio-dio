

async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/LucasSst/js-developer-portfolio-dio/main/assents/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()

} 