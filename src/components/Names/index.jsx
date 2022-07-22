const Names = ({ title, names, children }) => {
    return (
        <>
            {
                title === 'Turma 1'
                    ?
                    <>
                        <h1>{title} essa 1</h1>
                        <h1>{title} essa 1</h1>
                        <h1>{title} essa 1</h1>
                    </>
                    :
                    <>
                        <h1>{title} essa 2</h1>
                        <h1>{title} essa 2</h1>
                        <h1>{title} essa 2</h1>
                    </>
            }



            <ul>
                {
                    names.map((name, index) =>
                        <li key={index}>{name}</li>
                    )
                }
            </ul>
            {children}
        </>
    )
}

export default Names;