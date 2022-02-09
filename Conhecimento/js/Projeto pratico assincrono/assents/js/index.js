const btn = document.getElementsByClassName('btn');
const img = document.getElementsByClassName('img')[0];
const baseUrl ='https://random.dog/woof.json';

const getDog = async () => {
  try {
    const data = await fetch(baseUrl);
    const json = await data.json();

    return json.url

  } catch (e) {
    console.log(e.message);
  }


};

const loadImg = async () => {
  img.src = await getDog();
}

loadImg();