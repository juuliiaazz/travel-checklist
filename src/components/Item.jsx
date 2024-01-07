/* eslint-disable react/prop-types */
export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <>
      <div className="list">
        <li>
          <input
            className="input-checkbox"
            type="checkbox"
            value={item.packed}
            onChange={() => onToggleItem(item.id)}
          />
          <label htmlFor={`${item.id}`}></label>

          <span
            style={
              item.packed
                ? {
                    fontFamily: "Quicksand-Bold",
                    textDecoration: "line-through",
                    color: "grey",
                  }
                : { fontFamily: "Quicksand-Bold", color: "black" }
            }
          >
            {item.quantity} {item.description}
          </span>
          <button onClick={() => onDeleteItem(item.id)}>
            <box-icon
              type="solid"
              name="trash"
              className="trash"
              color="gray"
            ></box-icon>
          </button>
        </li>
      </div>
    </>
  );
}
