for dir in HomePage RegistrationPage LoginPage ContactsPage; do
    mkdir -p src/pages/$dir &&
    for ext in .jsx .module.css; do
        file="src/pages/$dir/$dir$ext"
        touch $file
        if [[ $ext == ".jsx" ]]; then
            echo "import css from './$dir.module.css';

export default function $dir() {
    return(
    <div className={css.container}>
        <div>$dir</div>
    </div>
    );
}" > $file
    elif [[ $ext == '.module.css' ]]; then
        echo ".container {
        }" > $file
            fi
            git and $file
    done
done