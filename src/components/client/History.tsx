interface ICompPos {
  company: string;
  position: string;
}

export interface IHistory {
  period: string;
  compPos?: ICompPos;
}

type HistoryProps = {
  history: IHistory[];
};

const History = ({ history }: HistoryProps) => {
  return (
    <div>
      <ol>
        {history.map((item, index) => (
          <li key={index} className="flex space-x-2">
            <h3 className="w-[150px]">{item.period}</h3>
            <span className="flex flex-col w-full">
              <span>{item.compPos?.company}</span>
              <span>{item.compPos?.position}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default History;
