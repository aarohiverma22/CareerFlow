import type { ReactNode } from "react";

interface Column<T> {
  key: keyof T;
  header?: string;
  render?: (value: T[keyof T], row: T) => ReactNode;
}

interface GenericTableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
}

const GenericTable = <T extends object>({
  columns,
  data,
  emptyMessage = "No data available",
}: GenericTableProps<T>) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white">
      <table className="w-full min-w-max border-collapse text-left">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700"
              >
                {column.header || String(column.key)}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
              >
                {columns.map((column) => {
                  const value = row[column.key];

                  return (
                    <td
                      key={String(column.key)}
                      className="px-4 py-3 text-sm text-gray-600"
                    >
                      {column.render
                        ? column.render(value, row)
                        : String(value ?? "-")}
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-8 text-center text-sm text-gray-500"
              >
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;
