function Home(){

    const getQuestions=async ()=>{
        const response=await fetch("http://localhost:5000/fetchQuestions",{
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({})
            
        });

        return response.body;
    };

    return <div>
        {getQuestions}
    </div>
    
};

export default Home;