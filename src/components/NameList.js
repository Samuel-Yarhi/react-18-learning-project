export const NameList = () => {
    const names = ['Clark', 'Bruce', 'Diana']
    return <div>{names.map((name) => <h2 key={name}>{name}</h2>)}</div>
}

// One liner action!
// export const NameList = () =>  <div>{['Clark', 'Bruce', 'Diana'].map((name) => <h2 key={name}>{name}</h2>)}</div>
