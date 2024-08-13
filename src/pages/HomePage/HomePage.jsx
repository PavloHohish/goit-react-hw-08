import PageTitle from '../../components/PageTitle/PageTitle';

const pStyle = { textIndent: '20px', marginBottom: '8px' };

export default function HomePage() {
  return (
    <div className="container">
      <PageTitle>Phonebook</PageTitle>
      <p>About Phonebook:</p>
      <p style={pStyle}>
        Adipisicing nostrud aliqua est deserunt enim sit fugiat consequat
        aliquip minim quis elit voluptate mollit. Aliquip qui est qui enim
        aliqua et fugiat id sit labore veniam ad irure elit. Irure laboris sunt
        duis et non labore culpa aliqua mollit cillum quis culpa esse culpa.
        Lorem cupidatat esse minim non. Voluptate duis et et elit est excepteur
        minim velit nulla duis dolor esse esse. Enim id laboris deserunt sunt ad
        ut occaecat ea. Voluptate pariatur ad adipisicing Lorem anim non Lorem
        sunt commodo eiusmod tempor pariatur reprehenderit. Excepteur aute
        occaecat magna et. Id ad qui reprehenderit do nisi commodo ipsum aute
        dolor duis Lorem aliqua sit. Tempor cupidatat non deserunt magna enim
        dolore tempor id labore sit veniam. Irure ea elit dolore ea magna tempor
        ex ad sit.
      </p>
      <p style={pStyle}>
        Occaecat qui occaecat magna nisi id. Irure nulla quis cillum culpa dolor
        esse voluptate aute eu. Non quis mollit occaecat aliqua deserunt
        excepteur enim irure tempor magna enim ut. In sint dolor est id Lorem
        labore in. Ullamco do amet do eiusmod. Fugiat nisi laboris et in aliquip
        aute ut sunt.
      </p>
    </div>
  );
}
